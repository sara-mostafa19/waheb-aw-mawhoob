import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // دلوقتي مجرد انتقال صفحة
    navigate("/verify-code");
  };

  return (
    <div className="d-flex justify-content-center align-items-center p-5">
      <form
        className="login-form p-5 rounded-4"
        dir="rtl"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center my-4">تحقق من رقم هاتفك</h2>
        <p className="text-center mb-4">
          أدخل رقمك لإرسال رمز مكون من 4 أرقام للتحقق من هويتك.
        </p>

        <input
          type="text"
          placeholder="رقم الهاتف"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button type="submit">إرسال الرمز</button>

        <div className="d-flex  mt-4 gap-2">
          <Link
            to="/login"
            className="fw-bolder text-decoration-underline "  style={{ color: "#002E25" }}
          >
            العودة إلى تسجيل الدخول
          </Link>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
