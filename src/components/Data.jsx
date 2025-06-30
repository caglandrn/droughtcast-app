import React from "react";

const Data = () => (
  <div style={{ paddingLeft: "2rem", paddingRight: "2rem", paddingTop: "1rem", paddingBottom: "1rem", fontSize: "14px" }}>
    <h1>Kaynak ve Kapsam</h1>
    <h3>Çalışmanın Amacı</h3>
    <p>Bu çalışma, Türkiye’nin iklim profilini saatlik çözünürlükte modelleyebilmek için yalnızca iki açık-erişimli küresel iklim kaynağı kullanır.</p>

    <hr></hr>

    <h3>Veri Kaynakları</h3>
    <p>
      <strong>Kaynak:</strong> ERA5 Reanalysis (ECMWF)<br></br>
      <strong>Veri Tipi:</strong> Atmosfer &amp; yüzey değişkenleri<br></br>
      <strong>Zamansal Çözünürlük:</strong> Saatlik<br></br>
      <strong>Spatyal Çözünürlük:</strong> 0,25° × 0,25° (~30&nbsp;km)<br></br>
      <strong>Lisans:</strong> CC&nbsp;BY&nbsp;4.0
    </p>

    <p>
      <strong>Kaynak:</strong> Copernicus Climate Data Store<br></br>
      <strong>Veri Tipi:</strong> Hidro-meteorolojik göstergeler<br></br>
      <strong>Zamansal Çözünürlük:</strong> Saatlik<br></br>
      <strong>Spatyal Çözünürlük:</strong> 0,25° × 0,25°<br></br>
      <strong>Lisans:</strong> CC&nbsp;BY&nbsp;4.0
    </p>

    <hr></hr>

    <h3>Temel Özellikler</h3>
    <p><strong>Zaman Aralığı:</strong> 01&nbsp;Ocak&nbsp;2015 – 31&nbsp;Aralık&nbsp;2024</p>
    <p><strong>Coğrafi Kapsam:</strong> 26°E–45°E uzunluk &amp; 36°N–42°N enlem kuşağı (Türkiye’yi tamamen kapsar)</p>
    <p><strong>Ham Hacim:</strong> ≈&nbsp;160&nbsp;milyon grid&nbsp;nokta&nbsp;×&nbsp;saat&nbsp;kaydı</p>

    <hr></hr>

    <h3>Lisans ve Paylaşım</h3>
    <p>ERA5 ve Copernicus verileri Creative Commons BY&nbsp;4.0 altında serbesttir. İşlenmiş şehir-düzeyi veri setimiz, ticari olmayan araştırmalar için talep edenlere yine CC&nbsp;BY&nbsp;4.0 koşuluyla sağlanabilir – lütfen İletişim sayfasından ekibe ulaşın.</p>

    <hr></hr>

    <h3>Akademik ve Sürdürülebilirlik Vurgusu</h3>
    <p>Bu disiplinli, tek-kaynaklı veri hattı, projemizin akademik sağlamlığını ve sürdürülebilir su yönetimi hedeflerine yönelik güvenilir öngörü yeteneğini temel olarak güçlendirir.</p>
  </div>
);

export default Data;
