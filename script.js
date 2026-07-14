document.addEventListener("DOMContentLoaded", () => {
    
    // ================= 1. PEMBENAHAN NAVIGASI SPA LOGIC =================
    const navLinks = document.querySelectorAll(".navbar-nav [data-page], .btn[data-page]");
    const sections = document.querySelectorAll(".spa-page");

    function navigateToPage(targetPage) {
        document.querySelectorAll(".navbar-nav .nav-link").forEach(item => item.classList.remove("active"));
        
        const targetNavLink = document.querySelector(`.navbar-nav [data-page="${targetPage}"]`);
        if (targetNavLink) targetNavLink.classList.add("active");

        sections.forEach(section => {
            if (section.id === `page-${targetPage}`) {
                section.classList.remove("d-none");
                section.classList.add("page-active");
            } else {
                section.classList.remove("page-active");
                section.classList.add("d-none");
            }
        });
        window.scrollTo(0, 0);
    }

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetPage = link.getAttribute("data-page");
            navigateToPage(targetPage);
        });
    });

    // ================= 2. LIVE ESTIMASI HARGA FORM PEMBELIAN KONTAK =================
    const orderProduk = document.getElementById("orderProduk");
    const orderQty = document.getElementById("orderQty");
    const liveTotalHarga = document.getElementById("liveTotalHarga");
    const contactOrderForm = document.getElementById("contactOrderForm");

    function calculateLivePrice() {
        const selectedOption = orderProduk.options[orderProduk.selectedIndex];
        if (!selectedOption || selectedOption.value === "") {
            liveTotalHarga.innerText = "Rp 0";
            return;
        }
        const price = parseInt(selectedOption.getAttribute("data-price"));
        const qty = parseInt(orderQty.value) || 1;
        const total = price * qty;
        liveTotalHarga.innerText = `Rp ${total.toLocaleString('id-ID')}`;
    }

    if (orderProduk && orderQty) {
        orderProduk.addEventListener("change", calculateLivePrice);
        orderQty.addEventListener("input", calculateLivePrice);
    }

    if (contactOrderForm) {
        contactOrderForm.addEventListener("submit", (e) => {
            e.preventDefault();

            if (!contactOrderForm.checkValidity()) {
                e.stopPropagation();
                contactOrderForm.classList.add("was-validated");
                return;
            }

            const nama = document.getElementById("orderNama").value;
            const produk = orderProduk.value;
            const qty = orderQty.value;
            const metode = document.getElementById("orderMetode").value;
            const catatan = document.getElementById("orderCatatan").value || "-";
            const totalHarga = liveTotalHarga.innerText;

            const waMessage = `Halo Kasir Kafie Kofie Pekanbaru,\nSaya ingin memesan via Form Instan Kontak:\n\n` +
                              `• *Nama Pemesan:* ${nama}\n` +
                              `• *Menu Pilihan:* ${produk}\n` +
                              `• *Jumlah:* ${qty}x\n` +
                              `• *Metode:* ${metode}\n` +
                              `• *Catatan:* ${catatan}\n\n` +
                              `*Total Akhir:* ${totalHarga}\n\nMohon diproses ya kak!`;

            window.open(`https://wa.me/6287794736116?text=${encodeURIComponent(waMessage)}`, '_blank');
            contactOrderForm.reset();
            contactOrderForm.classList.remove("was-validated");
            liveTotalHarga.innerText = "Rp 0";
        });
    }

    // ================= 3. UTILITIES KERANJANG PADA HALAMAN MENU =================
    let cart = [];
    const cartCount = document.getElementById("cartCount");
    const cartItemsList = document.getElementById("cartItemsList");
    const cartTotalPrice = document.getElementById("cartTotalPrice");

    function updateCartUI() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (cartCount) cartCount.innerText = totalItems;

        if (cart.length === 0) {
            if (cartItemsList) cartItemsList.innerHTML = `<p class="text-center text-muted my-3">Belum ada item pilihan.</p>`;
            if (cartTotalPrice) cartTotalPrice.innerText = "Rp 0";
            return;
        }

        let htmlContent = "";
        let totalBill = 0;

        cart.forEach(item => {
            const subTotal = item.price * item.quantity;
            totalBill += subTotal;
            htmlContent += `
                <div class="d-flex justify-content-between align-items-center mb-2 border-bottom pb-2">
                    <div>
                        <h6 class="fw-bold mb-0 small">${item.title}</h6>
                        <small class="text-muted">Rp ${item.price.toLocaleString('id-ID')} x ${item.quantity}</small>
                    </div>
                    <span class="fw-bold text-dark small">Rp ${subTotal.toLocaleString('id-ID')}</span>
                </div>`;
        });

        if (cartItemsList) cartItemsList.innerHTML = htmlContent;
        if (cartTotalPrice) cartTotalPrice.innerText = `Rp ${totalBill.toLocaleString('id-ID')}`;
    }

    document.addEventListener("click", (e) => {
        if (e.target && (e.target.classList.contains("btn-add-cart") || e.target.classList.contains("btn-buy-instant"))) {
            const id = e.target.getAttribute("data-id");
            const title = e.target.getAttribute("data-title");
            const price = parseInt(e.target.getAttribute("data-price"));

            const existingItem = cart.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ id, title, price, quantity: 1 });
            }
            updateCartUI();
            alert(`"${title}" dimasukkan ke keranjang belanja.`);
        }
    });

    if (document.getElementById("btnCheckoutWhatsApp")) {
        document.getElementById("btnCheckoutWhatsApp").addEventListener("click", () => {
            if (cart.length === 0) return alert("Keranjang belanja kosong!");
            let msg = "Halo Kafie Kofie Pekanbaru, saya ingin memesan menu:\n\n";
            cart.forEach((item, i) => msg += `${i+1}. ${item.title} (${item.quantity}x)\n`);
            window.open(`https://wa.me/6287794736116?text=${encodeURIComponent(msg)}`, '_blank');
        });
    }

    // ================= 4. DETAIL POP-UP MODAL DINAMIS =================
    const dModal = new bootstrap.Modal(document.getElementById('detailModal'));
    document.querySelectorAll(".btn-detail-trigger").forEach(btn => {
        btn.addEventListener("click", () => {
            document.getElementById('modalTitle').innerText = btn.getAttribute("data-title");
            document.getElementById('modalDesc').innerText = btn.getAttribute("data-desc");
            dModal.show();
        });
    });
});