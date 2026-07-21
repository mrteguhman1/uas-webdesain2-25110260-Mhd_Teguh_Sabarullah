body {
    font-family: 'Plus Jakarta Sans', sans-serif;
    background-color: #eef3ed !important; 
    background-image: 
        linear-gradient(rgba(238, 243, 237, 0.82), rgba(67, 163, 48, 0.82)), 
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z' fill='none' stroke='%23bcd0bb' stroke-width='1.5'/%3E%3Ccircle cx='30' cy='30' r='6' fill='none' stroke='%23ffc107' stroke-width='1.5'/%3E%3Cpath d='M30 12 L30 20 M30 40 L30 48 M12 30 L20 30 M40 30 L48 30' stroke='%23bcd0bb' stroke-width='1'/%3E%3C/svg%3E") !important;
    background-repeat: repeat !important;
    background-attachment: fixed !important; /* Membuat background tetap tenang saat di-scroll */
}


.jumbotron-hero {
    background: linear-gradient(rgba(15, 12, 10, 0.75), rgba(26, 20, 17, 0.9)), 
                url('https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1400&q=80') no-repeat center center/cover;
    min-height: 75vh;
    display: flex;
    align-items: center;
    position: relative;
}

/* Efek Teks Gradasi Emas */
.text-gradient {
    font-family: 'Playfair Display', serif;
    background: linear-gradient(135deg, #ffffff 50%, #ffc107 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.text-muted-custom {
    color: #dfdcd6 !important;
}


.glass-button {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
}
.glass-button:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: #ffc107;
    color: #ffc107;
}

.carousel-fade .carousel-item {
    opacity: 0;
    transition-duration: 0.8s;
    transition-property: opacity;
}

.carousel-fade .carousel-item.active {
    opacity: 1;
}

.ken-burns {
    animation: zoomSlow 24s infinite alternate;
    transition: transform 0.5s ease;
}

@keyframes zoomSlow {
    0% { transform: scale(1); }
    100% { transform: scale(1.18); }
}

.img-ratio-container {
    position: relative;
    width: 100%;
    padding-top: 65%;
    overflow: hidden;
    background-color: #e9ecef;
}

.img-ratio-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.product-card {
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08) !important;
}

.product-card:hover .img-ratio-container img {
    transform: scale(1.08);
}

.nav-link { transition: all 0.2s ease; }
.nav-link:hover, .nav-link.active { color: #ffc107 !important; }

.card-feature {
    background: #ffffff;
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.card-feature:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06) !important;
    border-color: #ffc107 !important;
}

.icon-animated-box {
    width: 75px;
    height: 75px;
    background-color: #f8f9fa;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s ease;
}
.card-feature:hover .icon-animated-box {
    background-color: #212529;
    transform: rotate(360deg) scale(1.08);
}

.btn-hover-grow { transition: transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
.btn-hover-grow:hover { transform: scale(1.04); }

.img-container-frame { transition: outline 0.3s ease; }
.img-container-frame:hover { outline: 4px solid #ffc107; }

.bg-brown-gradient { background: linear-gradient(135deg, #2c221e 0%, #1a1412 100%); }
.img-carousel { height: 190px; object-fit: cover; }

.animate-pulse { animation: pulse 2s infinite; }
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.08); }
    100% { transform: scale(1); }
}
