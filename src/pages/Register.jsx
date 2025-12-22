import React, { useState } from "react";
import "../../src/styles/Register.css"; // هنعمل ملف CSS منفصل

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    nationalId: "",
    accountType: "واهب",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (formData.password !== formData.confirmPassword) {
      setError("كلمة المرور غير متطابقة");
      return;
    }

    if (!formData.agree) {
      setError("يجب الموافقة على الشروط والأحكام");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://4542d126b94f.ngrok-free.app/api/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            phone: formData.phone,
            nationalId: formData.nationalId,
            accountType: formData.accountType,
            password: formData.password,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setSuccess("تم التسجيل بنجاح!");
        console.log("Registration successful:", data);
    
      } else {
        const errorData = await response.json();
        setError(errorData.message || "فشل في التسجيل");
      }
    } catch (err) {
      setError("خطأ في الاتصال بالخادم");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container  d-flex justify-content-center align-items-center p-4">
      <form className="register-form p-4 rounded-4 " onSubmit={handleSubmit} dir="rtl">
        <h1 className="text-center my-4">إنشاء حساب جديد</h1>
        <p className="text-muted text-center mb-4">!اهلا بك في واهب ولا موهوب</p>

        <div className="name-fields d-flex gap-4" >
          
          <input
          
            type="text"
            name="firstName"
            placeholder="الاسم بالعربي"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="اسم العائلة بالعربي"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <input
          type="text"
          name="phone"
          placeholder="ادخل رقم الهاتف"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
        className="my-2"
          type="text"
          name="nationalId"
          placeholder="ادخل رقمك القومي"
          value={formData.nationalId}
          onChange={handleChange}
        />
        <p className="text-muted">نوع الحساب</p>
        <div className="account-type d-flex gap-4 mb-3">
          
          <label className="d-flex align-items-center gap-2">
            <input
              type="radio"
              name="accountType"
              value="واهب"
              checked={formData.accountType === "واهب"}
              onChange={handleChange}
            />
            واهب
          </label>
          <label className="d-flex align-items-center gap-2">
            <input
              type="radio"
              name="accountType"
              value="موهوب"
              checked={formData.accountType === "موهوب"}
              onChange={handleChange}
            />
            موهوب
          </label>
          <label  className="d-flex align-items-center gap-2">
            <input
              type="radio"
              name="accountType"
              value="مسؤول"
              checked={formData.accountType === "مسؤول"}
              onChange={handleChange}
            />
            مسؤول
          </label>
        </div>

        <input
          type="password"
          name="password"
          placeholder="ادخل كلمة المرور"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="ادخل كلمة المرور مرة اخرى"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <label className="agree d-flex justify-content-between">
        <p className="w-75">          بإنشائك حساب، فهذا يعني أنك توافق على الشروط والأحكام وسياسة الخصوصية
          الخاصة بنا.</p>
            <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
        </label>

        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
        {success && (
          <p style={{ color: "green", textAlign: "center" }}>{success}</p>
        )}

        <button type="submit" disabled={loading}>
          {loading ? "جاري التسجيل..." : "سجل الآن!"}
        </button>
      </form>
    </div>
  );
}

export default Register;
