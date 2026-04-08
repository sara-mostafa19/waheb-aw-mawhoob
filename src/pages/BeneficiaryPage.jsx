import "../styles/Beneficiary.css";
import avatar from "../assets/avatar.png";
import heroImg from "../assets/heroBeneficiary.png";
import { NavLink } from "react-router-dom";
import book1 from "../assets/book1.png";
import dressImg from "../assets/dress.png";
import sweaterImg from "../assets/sweeter.png";
import calculatorImg from "../assets/calc.png";
import bagImg from "../assets/bag.png";
import book2 from "../assets/book2.png";

export default function Beneficiary() {
  return (
    <div className="beneficiary-page" dir="rtl">
      <header className="beneficiary-header">
        <div className="beneficiary-avatar">
          <img src={avatar} alt="user" />
        </div>

        <nav className="beneficiary-nav">
          <NavLink to="/" className="nav-item">
            الرئيسية
          </NavLink>

          <NavLink to="/" className="nav-item">
            التبرعات
          </NavLink>

          <NavLink to="/about" className="nav-item">
            من نحن
          </NavLink>

          <NavLink to="/contact" className="nav-item">
            تواصل معنا
          </NavLink>
        </nav>
      </header>

      <section className="beneficiary-hero">
        <img src={heroImg} alt="hero" className="beneficiary-hero-image" />

        <div className="beneficiary-hero-overlay">
          <h1>
            احصل على ما تحتاجه
            <br />
            بكل سهولة
          </h1>

          <p>
            اطلب احتياجاتك واحصل على دعم المجتمع بسرعة وأمان.
            <br />
            منصة تربطك بالمتبرعين في بيئة موثوقة وشفافة.
          </p>

          <button>ابحث الآن عن احتياجك</button>
        </div>
      </section>
      <section className="beneficiary-intro">
        <div className="beneficiary-intro-tag">التبرعات المتاحة</div>

        <h2 className="beneficiary-intro-title">
          اختر ما <span>تحتاجه</span>
        </h2>

        <p className="beneficiary-intro-text">
          تصفح الخدمات والمنتجات المتاحة أو أضف طلبك ليصلك الدعم من المجتمع
        </p>

        <button className="beneficiary-intro-btn">اضافة طلب جديد</button>
      </section>
      <section className="beneficiary-cards-section">
        <div className="beneficiary-cards-grid">
          <div className="beneficiary-card">
            <div className="beneficiary-card-image-wrapper">
              <span className="beneficiary-badge available">متاحة</span>
              <img
                src={book1}
                alt="كتب مدرسية"
                className="beneficiary-card-image"
              />
            </div>
            <h3 className="beneficiary-card-title">
              كتب مدرسية - الصف الرابع الابتدائي
            </h3>
            <p className="beneficiary-card-text">
              مجموعة كتب مدرسية للصف الرابع الابتدائي بحالة جيدة للعام الدراسي
              الحالي
            </p>
            <button className="beneficiary-card-btn active">اطلب الآن</button>
          </div>

          <div className="beneficiary-card">
            <div className="beneficiary-card-image-wrapper">
              <span className="beneficiary-badge available">متاحة</span>
              <img
                src={dressImg}
                alt="ملابس يومية"
                className="beneficiary-card-image"
              />
            </div>
            <h3 className="beneficiary-card-title">ملابس يومية - سيدات (L)</h3>
            <p className="beneficiary-card-text">
              ملابس استخدام يومي بحالة مناسبة للسيدات مقاس L
            </p>
            <button className="beneficiary-card-btn active">اطلب الآن</button>
          </div>

          <div className="beneficiary-card">
            <div className="beneficiary-card-image-wrapper">
              <span className="beneficiary-badge unavailable">غير متاحة</span>
              <img
                src={sweaterImg}
                alt="ملابس شتوية"
                className="beneficiary-card-image"
              />
            </div>
            <h3 className="beneficiary-card-title">
              ملابس شتوية - أطفال (6-9 سنوات)
            </h3>
            <p className="beneficiary-card-text">
              بولوفرات شتوية بحالة جيدة مناسبة للأطفال من 6 إلى 9 سنوات
            </p>
            <button className="beneficiary-card-btn disabled">اطلب الآن</button>
          </div>

          <div className="beneficiary-card">
            <div className="beneficiary-card-image-wrapper">
              <span className="beneficiary-badge unavailable">غير متاحة</span>
              <img
                src={calculatorImg}
                alt="آلة حاسبة"
                className="beneficiary-card-image"
              />
            </div>
            <h3 className="beneficiary-card-title">آلة حاسبة علمية</h3>
            <p className="beneficiary-card-text">
              آلة حاسبة علمية مناسبة لطلبة المرحلة الإعدادية والثانوية بحالة
              جيدة وتعمل بكفاءة
            </p>
            <button className="beneficiary-card-btn disabled">اطلب الآن</button>
          </div>

          <div className="beneficiary-card">
            <div className="beneficiary-card-image-wrapper">
              <span className="beneficiary-badge unavailable">غير متاحة</span>
              <img
                src={bagImg}
                alt="شنطة مدرسية"
                className="beneficiary-card-image"
              />
            </div>
            <h3 className="beneficiary-card-title">شنطة مدرسية</h3>
            <p className="beneficiary-card-text">
              شنطة مدرسية بحالة جيدة مناسبة لطلبة المرحلة الابتدائية
            </p>
            <button className="beneficiary-card-btn disabled">اطلب الآن</button>
          </div>

          <div className="beneficiary-card">
            <div className="beneficiary-card-image-wrapper">
              <span className="beneficiary-badge available">متاحة</span>
              <img
                src={book2}
                alt="كتب مدرسية"
                className="beneficiary-card-image"
              />
            </div>
            <h3 className="beneficiary-card-title">
              كتب مدرسية - الصف الثاني الإعدادي
            </h3>
            <p className="beneficiary-card-text">
              مجموعة كتب مدرسية للصف الثاني الإعدادي تشمل المواد الأساسية بحالة
              جيدة
            </p>
            <button className="beneficiary-card-btn active">اطلب الآن</button>
          </div>
        </div>

        <div className="beneficiary-more">عرض المزيد من التبرعات &lt;</div>
      </section>
    </div>
  );
}
