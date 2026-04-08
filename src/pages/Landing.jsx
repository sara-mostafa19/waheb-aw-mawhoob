import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Landing.css";
import testo1 from "../assets/testo1.jpg";
import testo2 from "../assets/testo2.jpg";


function Landing() {
  const [activeTab, setActiveTab] = useState("donor");
  return (
    <div dir="rtl">
      {/* ===== Navbar ===== */}
      <nav className="d-flex justify-content-center my-5 ">
        <div className="nav-pill d-flex gap-5  py-3 rounded-pill w-50 text-center justify-content-evenly">
          <a href="#home" className="text-white text-decoration-none ">
            الرئيسية
          </a>
          <a href="#about" className="text-white text-decoration-none ">
            عن واهب
          </a>
          <a href="#contact" className="text-white text-decoration-none ">
            تواصل معنا
          </a>
        </div>
      </nav>

      {/* ===== Hero Section ===== */}
      <section className="hero-section d-flex align-items-center justify-content-center text-center">
        <div className="hero-overlay"></div>

        <div className="container position-relative z-2">
          <h1 className="text-white mb-3">بمساعدتك</h1>

          <h1 className="hero-title mb-4">نقدر نغير حياة</h1>

          <p className="text-white fs-5 mb-5">
            سواء كنت حابب تدي او محتاج مساعدة، احنا هنا عشان نسهل الموضوع عليك
          </p>

          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link
              to="/register?type=donor"
              className="btn btn-success rounded-pill px-5 py-2 fw-bold"
            >
              انا واهب (متبرع)
            </Link>
            <Link
              to="/register?type=beneficiary"
              className="btn btn-outline-success rounded-pill px-5 py-2 fw-bold"
            >
              انا موهوب (مستفيد)
            </Link>
          </div>
        </div>
      </section>

      {/* ===== How it works ===== */}
      <section className="container my-5 text-center">
        <h2 className="fw-bold mb-4">ازاي المنصة بتشتغل؟</h2>

        <div className="row work rounded-pill g-0 overflow-hidden mx-auto">
          <div className="col-md-6">
            <div
              className={`py-3 rounded-pill text-center ${
                activeTab === "donor"
                  ? "work-pill text-white"
                  : "reciever-pill text-dark"
              }`}
              style={{ cursor: "pointer" }}
              onClick={() => setActiveTab("donor")}
            >
              لو انت واهب
            </div>
          </div>

          <div className="col-md-6">
            <div
              className={`py-3 rounded-pill text-center ${
                activeTab === "receiver"
                  ? "work-pill text-white"
                  : "reciever-pill text-dark"
              }`}
              style={{ cursor: "pointer" }}
              onClick={() => setActiveTab("receiver")}
            >
              لو انت موهوب
            </div>
          </div>
        </div>
      </section>

      {/* ===== Steps Section ===== */}
      {activeTab === "donor" && (
        <section className="container my-5">
          <div className="step-pill d-flex align-items-center gap-4 mb-4">
            <div className="step-number">1</div>
            <div>
              <h5 className="fw-bold text-success mb-1">سجل حسابك</h5>
              <p className="text-muted mb-0">
                بخطوات بسيطة وسريعة، ادخل رقمك وبياناتك واعمل حساب جديد
              </p>
            </div>
          </div>

          <div className="step-pill d-flex align-items-center gap-4 mb-4">
            <div className="step-number">2</div>
            <div>
              <h5 className="fw-bold text-success mb-1">اعرض تبرعك</h5>
              <p className="text-muted mb-0">
                صور اللبس او المنتج الي تقدر تتبرع بيه وارفعه على المنصة بسهولة
              </p>
            </div>
          </div>

          <div className="step-pill d-flex align-items-center gap-4">
            <div className="step-number">3</div>
            <div>
              <h5 className="fw-bold text-success mb-1">سلم الأمانة</h5>
              <p className="text-muted mb-0">
                مندوبنا هيوصلك لحد باب البيت يستلم منك التبرع ويوصله
              </p>
            </div>
          </div>
        </section>
      )}
      {activeTab === "receiver" && (
        <section className="container my-5">
          <div className="step-pill d-flex align-items-center gap-4 mb-4">
            <div className="step-number">1</div>
            <div>
              <h5 className="fw-bold text-success mb-1">سجل حسابك</h5>
              <p className="text-muted mb-0">
                بخطوات بسيطة وسريعة، ادخل رقمك وبياناتك واعمل حساب جديد
              </p>
            </div>
          </div>

          <div className="step-pill d-flex align-items-center gap-4 mb-4">
            <div className="step-number">2</div>
            <div>
              <h5 className="fw-bold text-success mb-1">طلب التبرعات</h5>
              <p className="text-muted mb-0">
                اكتب احتياجك بنفسك أو اختار من التبرعات المتاحة علشان تقدر تطلب
                الدعم المناسب
              </p>
            </div>
          </div>

          <div className="step-pill d-flex align-items-center gap-4">
            <div className="step-number">3</div>
            <div>
              <h5 className="fw-bold text-success mb-1">الاستلام</h5>
              <p className="text-muted mb-0">استلم دعمك بسهولة وثقة</p>
            </div>
          </div>
        </section>
      )}

      {/* ===== Donation Types ===== */}
      <section className="container my-5 px-4">
        <h3 className="fw-bold mb-5 text-end">انواع التبرع المتاحة</h3>

        <div className="row g-4">
                 {/* الملابس */}
          <div className="col-md-6">
            <div className="donation-card h-100 d-flex flex-column justify-content-between">
              <div>
                <div className="icon-circle mb-3"><i class="fa-solid fa-shirt"></i></div>

                <h4 className="fw-bold mb-3">الملابس</h4>

                <p className="text-muted">
                  هدومك القديمة ممكن تكون لبس عيد لحد تاني، بنقبل كل الملابس
                  بحالة جيدة
                </p>
              </div>

              <a href="#" className="donation-link mt-3">
                اتبرع بملابس <i class="fa-solid fa-arrow-left"></i>
              </a>
            </div>
          </div>
          {/* التعليم */}
          <div className="col-md-6">
            <div className="donation-card h-100 d-flex flex-column justify-content-between">
              <div>
                <div className="icon-circle mb-3"><i class="fa-solid fa-graduation-cap"></i></div>

                <h4 className="fw-bold mb-3">التعليم</h4>

                <p className="text-muted">
                  كتب، أو أدوات مدرسية، مساعدة بسيطة بتفتح باب مستقبل لطالب
                  محتاج
                </p>
              </div>

              <a href="#" className="donation-link mt-3">
                اتبرع للتعليم <i class="fa-solid fa-arrow-left"></i>
              </a>
            </div>
          </div>

     
        </div>
      </section>


      {/* ===== Stats Section ===== */}
<section className="stats-section text-center">
  <div className="container">
    <h3 className="fw-bold mb-5">ارقامنا بتحكي عن تأثيرنا</h3>

    <div className="row">
      <div className="col-md-4 mb-4">
        <h4 className="stats-number">+5K</h4>
        <p className="stats-text">قطعة ملابس</p>
      </div>

      <div className="col-md-4 mb-4">
        <h4 className="stats-number">+6.9K</h4>
        <p className="stats-text">طالب مدعوم</p>
      </div>

      <div className="col-md-4 mb-4">
        <h4 className="stats-number">12</h4>
        <p className="stats-text">محافظة</p>
      </div>
    </div>
  </div>
</section>
{/* ===== Testimonials Section ===== */}
<section className="container my-5">
  <h3 className="fw-bold mb-5 text-end">قصص من مجتمعنا</h3>

  <div className="row g-4">
    
    {/* Card 2 */}
    <div className="col-md-6">
      <div className="testimonial-card h-100">
        <div className="d-flex align-items-center mb-3 gap-3">
          <img
            src={testo2}
            alt="مريم احمد"
            className="testimonial-img"
          />
          <div>
            <h5 className="fw-bold mb-0">مريم احمد</h5>
            <small className="text-muted">واهب</small>
          </div>
        </div>

        <p className="testimonial-text">
          "قدمت حاجة بسيطة ماكنتش بستخدمها، واللي حصل إن الموضوع كان أسهل
          بكتير مما توقعت. حسّيت إن اللي بعمله ليه قيمة حقيقية."
        </p>
      </div>
    </div>
    {/* Card 1 */}
    <div className="col-md-6">
      <div className="testimonial-card h-100">
        <div className="d-flex align-items-center mb-3 gap-3">
          <img
            src={testo1}
            alt="محمد احمد"
            className="testimonial-img"
          />
          <div>
            <h5 className="fw-bold mb-0">محمد احمد</h5>
            <small className="text-muted">موهوب</small>
          </div>
        </div>

        <p className="testimonial-text">
          "كنت بدور على دعم بسيط في مهارة معينة، وقدرت ألاقي حد يساعدني.
          التجربة كانت سريعة وواضحة، وحسّيت إن في ناس فعلاً عايزة تساعد."
        </p>
      </div>
    </div>

  </div>
</section>

{/* ===== Trust & Safety Section ===== */}
<section className="trust-section text-center">
  <div className="container">
    <div className="trust-icon mx-auto mb-4">
      <i className="fa-solid fa-shield-halved"></i>
    </div>

    <h3 className="fw-bold mb-3">أمانك وكرامتك أولويتنا</h3>

    <p className="text-muted trust-text mx-auto fs-5">
      بياناتك مشفرة بالكامل، وهويتك محفوظة. احنا بنضمن
      عملية تبرع واستقبال يراعي الخصوصية والكرامة الإنسانية
    </p>
  </div>
</section>
{/* ===== footer Section ===== */}
<section className="footer text-center">
  <div className="container">
    <h2 className="fw-bold mb-4">مستعد تبدأ؟</h2>

    <p className="text-muted mb-5 fs-5">
      انضم إلى آلاف المستخدمين الذين يثقون بنا
    </p>
    <div className="d-flex justify-content-center gap-3 flex-wrap">
      <Link

        to="/register?type=beneficiary"
        className="btn btn-outline-success rounded-pill px-5 py-2 fw-bold"
      >
        انا موهوب (مستفيد)
      </Link>

      <Link
        to="/register?type=donor"
        className="btn btn-success rounded-pill px-5 py-2 fw-bold"
      >
        انا واهب (متبرع)
      </Link>
    </div>
  </div>
</section>







    </div>
  );
}

export default Landing;
