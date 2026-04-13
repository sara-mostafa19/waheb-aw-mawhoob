import React from "react";
import "./Footer.css";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="footer-section" dir="rtl">
      <div className="container">
        <div className="row text-center my-4">
          <div className="col-md-4 mb-4 mb-md-0">
            <h2 className="footer-title">واهب ولا موهوب</h2>
            <p className="footer-text ">
              منصة تربط بين المحتاجين والمتبرعين
              <br />
              في بيئة آمنة وشفافة
            </p>
          </div>

          <div className="col-md-4 mb-4 mb-md-0">
            <h2 className="footer-title">تصفح بسهولة</h2>
            <ul className="footer-links list-unstyled">
              <li>
                <a href="#">من نحن</a>
              </li>
              <li>
                <a href="#">التبرعات</a>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h3 className="footer-title">تواصل معنا</h3>
            <p className="footer-email">wahebwlamawhoob@gmail.com</p>
          </div>
        </div>

        <div className="footer-social d-flex justify-content-center align-items-center gap-4">
          <a href="#" className="social-icon" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" className="social-icon" aria-label="Twitter X">
            <BsTwitterX />
          </a>
          <a href="#" className="social-icon" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
        </div>

        <hr className="footer-line" />

        <div className="footer-bottom text-center">
          جميع الحقوق محفوظة © واهب ولا موهوب 2025
        </div>
      </div>
    </footer>
  );
}