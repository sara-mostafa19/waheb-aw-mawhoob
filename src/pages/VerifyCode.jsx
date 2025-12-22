import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

function VerifyCode() {
  const [code, setCode] = useState(["", "", "", ""]);
  const inputsRef = useRef([]);
  const navigate = useNavigate();

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return; 

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 3) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalCode = code.join("");
    console.log(finalCode);

    navigate("/reset-password");
  };

  return (
    <div className="d-flex justify-content-center align-items-center p-5 ">
      <form
        className="login-form p-5 rounded-4 text-center"
        dir="rtl"
        onSubmit={handleSubmit}
      >
        <h2 className="mb-3">أدخل رمز التحقق</h2>
        <p className="mb-4">
          أرسلنا رمزًا مكونًا من 4 أرقام إلى رقم الهاتف
        </p>

        <div className="d-flex justify-content-center gap-3 my-4">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              style={{
                width: "55px",
                height: "55px",
                textAlign: "center",
                fontSize: "20px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />
          ))}
        </div>
        <div className="d-flex my-2 gap-1">
            <p className="text-muted">لم تستلم الرمز؟ </p>
            <p  style={{ color: "#002E25" }}>اضغط لإعادة الإرسال</p>
        </div>

        <button type="submit" className="w-100 mb-3">
          تحقق من الرمز
        </button>

        <Link
          to="/login"
          className="text-decoration-underline text-dark"
        >
          العودة إلى تسجيل الدخول
        </Link>
      </form>
    </div>
  );
}

export default VerifyCode;
