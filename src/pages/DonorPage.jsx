import React from "react";
import "../styles/Donor.css";

export default function DonorPage() {
  return (
    <div className="waheb-top-section" dir="rtl">
      <div className="container py-4">

        {/* Top Bar */}
        <div className="position-relative top-bar-wrapper mb-5">

          {/* Profile Image */}
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200"
            alt="profile"
            className="waheb-profile-img"
          />

          {/* Navbar */}
          <div className="waheb-nav mx-auto d-flex align-items-center justify-content-around">
            <a href="#" className="waheb-nav-link">الرئيسية</a>
            <a href="#" className="waheb-nav-link">الطلبات</a>
            <a href="#" className="waheb-nav-link">تواصل معنا</a>
          </div>

        </div>

        {/* Hero Section */}
        <div className="waheb-hero position-relative overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600"
            alt="donation"
            className="waheb-hero-img"
          />

          <div className="waheb-overlay"></div>

          <div className="waheb-hero-content position-absolute top-50 start-50 translate-middle text-center">
            
            <h1 className="waheb-hero-title">
              شارك بما لديك
              <br />
              وساعد المجتمع
            </h1>

            <p className="waheb-hero-text">
              حول الأشياء التي لم تعد تستخدمها إلى فرصة دعم حقيقية للآخرين.
              <br />
              منصة تربطك بالمحتاجين في بيئة موثوقة وشفافة.
            </p>

            <button className="waheb-hero-btn">
              أضف تبرعك الآن
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}