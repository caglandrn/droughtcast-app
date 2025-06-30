import React from "react";

const About = () => (
  <div style={{ paddingLeft: "2rem", paddingRight: "2rem", paddingTop: "1rem", paddingBottom: "1rem", fontSize: "14px" }}>
    <h1>Hakkında</h1>
    <h3>Proje Özeti</h3>
    <p>“İklim Değişikliği ve Su Kaynakları Yönetim Sistemi” lisans bitirme projemiz, Türkiye’nin 81 ili için beş yıllık kuraklık öngörüleri sunarak yerel yönetimlere, çiftçilere ve araştırmacılara veri-temelli karar desteği sağlamayı hedefler.</p>

    <hr></hr>

    <h3>Neden Önemli?</h3>
    <p>Artan kuraklık baskısı; tarımsal üretim, içme suyu güvenliği ve ekosistem sağlığı üzerinde doğrudan tehdit oluşturur. Projemiz, bu riski Vapor Pressure Deficit (VPD) üzerinden ölçerek erken uyarı ve sürdürülebilir su yönetimi seçenekleri üretir.</p>

    <hr></hr>

    <h3>Bilimsel Dayanak</h3>
    <p>
      <strong>Veri Havuzu:</strong> 2015-2024 yıllarına ait ≈ 7,1 milyon saatlik gözlem (ERA5 reanaliz, MGM istasyon verileri, Copernicus).<br></br>
      <strong>Özellik Seti:</strong> 8 meteorolojik değişken + VPD → 9 boyutlu matriks.<br></br>
      <strong>Tahmin Motoru:</strong> GRU-Enhanced modelimiz, % 19,9 sMAPE (≈ % 80 doğruluk) ile oransal hata açısından en güvenilir performansı sunar ve platforma gerçek-zamanlı entegre edilmiştir.
    </p>

    <hr></hr>

    <h3>Ne Sunuyoruz?</h3>
    <p>
      <strong>Etkileşimli Harita:</strong> Şehir seçildiğinde anlık VPD projeksiyonu ve risk seviyesi.<br></br>
      <strong>Su Tasarrufu Önerileri:</strong> Damla sulama optimizasyonu, yağmur suyu hasadı vb. uygulamaya dönük tavsiyeler.
    </p>

    <hr></hr>

    <h3>Sürdürülebilirlik Vurgusu</h3>
    <p>Çalışma, BM SKA 6 (Temiz Su ve Sıhhi Koşullar) hedefine doğrudan katkı sağlayarak iklim dirençli planlamayı teşvik eder. Akademik doğruluk ile kullanıcı dostu tasarımı birleştiren bu mezuniyet projesi, Türkiye’nin su yönetiminde proaktif adımlar atmasına aracılık etmektedir.</p>
  </div>
);

export default About;
