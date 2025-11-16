document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Baju", img: "1.jpg", price: 80000 },
      { id: 2, name: "Sepatu", img: "2.jpg", price: 150000 },
      { id: 3, name: "jersey", img: "3.jpeg", price: 85000 },
      { id: 4, name: "jaket", img: "4.jpeg", price: 110000 },
      { id: 5, name: "hoodie", img: "5.jpeg", price: 100000 },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      // cek apakah ada item yang sama di cart
      const cartItem = this.items.find((item) => item.id === newItem.id);
      // jika belum ada
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        // jika sudah ada
        this.items = this.items.map((item) => {
          if (item.id !== newItem.id) {
            // kembalikan item yang tidak sama
            return item;
          } else {
            // jika adanya item yang sama, tambahkan quantity dan subtotal harga
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += newItem.price;
            return item;
          }
        });
      }
    },
    remove(id) {
      // ambil item yang mau di hapus berdasarkan id
      const cartItem = this.items.find((item) => item.id === id);

      // jika item lebih dari 1
      if (cartItem.quantity > 1) {
        // telusuri satu per satu item di cart
        this.items = this.items.map((item) => {
          // jika bukan item yang diklik
          if (item.id !== id) {
            return item;
          } else {
            // jika item yang diklik, kurangi quantity dan subtotal harga
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        // jika item cuma 1, hapus dari cart
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});

// konfersi ke rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
