# Fuel Track - Yakıt Maliyeti Hesaplayıcısı

Türkiye'nin güncel yakıt fiyatları ile yakıt maliyeti hesaplayan modern web uygulaması.

## Özellikler

- 🗺️ **Rota Hesaplama**: Başlangıç ve bitiş noktaları ile otomatik mesafe hesaplama
- ⛽ **Güncel Fiyatlar**: Türkiye'nin şehirlerine göre güncel yakıt fiyatları
- 🚗 **Araç Tipleri**: Farklı araç kategorileri için önceden tanımlı tüketim değerleri
- 🌍 **Çoklu Dil**: Türkçe ve İngilizce dil desteği
- 📱 **Responsive**: Tüm cihazlarda uyumlu tasarım
- 💰 **Reklam Entegrasyonu**: Google Ads ile monetizasyon

## Teknolojiler

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **API**: Hasan Adıgüzel Yakıt Fiyatları API
- **Deployment**: Netlify
- **Styling**: Modern glassmorphism tasarım

## Netlify'de Deployment

### Otomatik Deployment (Önerilen)

1. **GitHub Repository Oluştur**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/kullaniciadi/fuel-track.git
   git push -u origin main
   ```

2. **Netlify'de Deploy Et**:
   - [Netlify](https://netlify.com) hesabına giriş yap
   - "New site from Git" butonuna tıkla
   - GitHub repository'sini seç
   - Build ayarları otomatik olarak `netlify.toml` dosyasından alınacak
   - "Deploy site" butonuna tıkla

### Manuel Deployment

1. **Dosyaları Zip'le**:
   - Tüm proje dosyalarını seç
   - Zip dosyası oluştur

2. **Netlify'de Manuel Deploy**:
   - [Netlify](https://netlify.com) hesabına giriş yap
   - "Sites" sayfasında zip dosyasını sürükle-bırak

## Konfigürasyon

### Google Ads Entegrasyonu

`index.html` dosyasında Google Ads kodlarını güncelleyin:

```html
<!-- ca-pub-XXXXXXXXXX yerine kendi publisher ID'nizi yazın -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"></script>
```

### API Ayarları

Uygulama şu API'yi kullanmaktadır:
- **Yakıt Fiyatları**: `http://hasanadiguzel.com.tr/api/akaryakit/sehir={sehir_adi}`
- **CORS Proxy**: `https://cors-anywhere.herokuapp.com/`

## Geliştirme

### Yerel Sunucu

```bash
# Python ile
python -m http.server 8000

# Node.js ile
npx serve .

# Live Server (VS Code Extension)
# Live Server extension'ı yükleyip "Go Live" butonuna tıklayın
```

### Dosya Yapısı

```
fuel-track/
├── index.html          # Ana HTML dosyası
├── styles.css          # CSS stilleri
├── script.js           # JavaScript fonksiyonları
├── netlify.toml        # Netlify konfigürasyonu
└── README.md           # Bu dosya
```

## Lisans

MIT License - Detaylar için LICENSE dosyasına bakın.

## Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Branch'i push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## İletişim

Proje hakkında sorularınız için issue açabilirsiniz.