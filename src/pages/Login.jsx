import React, { useState } from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await fetch(
        "https://4542d126b94f.ngrok-free.app/api/auth/signin",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "فشل تسجيل الدخول");
        return;
      }

      setSuccess("تم تسجيل الدخول بنجاح");
      console.log("Login success:", data);
    } catch (err) {
      setError("خطأ في الاتصال بالخادم");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container login-container-overlay d-flex justify-content-center align-items-center align-content-center p-5">
      <form className="login-form px-5 py-3 rounded-4" onSubmit={handleSubmit} dir="rtl">
        <h1 className="text-center my-4">تسجيل الدخول</h1>
        <p className="text-muted text-center mb-4" >
          اهلا بك في واهب ولا موهوب!
        </p>

        <label className="mb-3">رقم الهاتف</label>
        <input
          type="text"
          name="phone"
          placeholder="رقم الهاتف"
          value={formData.phone}
          onChange={handleChange}
        />
         <label className="mb-3">كلمة المرور </label>
        <input
          type="password"
          name="password"
          placeholder="كلمة المرور"
          value={formData.password}
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

            <div className="  my-4">
              <Link to="/forgot-password" className="fw-bolder  forget text-decoration-none" >
               نسيت كلمة المرور؟
             </Link>
            </div>
       
        {error && <p className="text-danger text-center">{error}</p>}
        {success && <p className="text-success text-center">{success}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "جاري تسجيل الدخول..." : "سجل الان! "}
        </button>

        <div className="d-flex justify-content-center mt-4 gap-2">
          <p className="text-muted">ليس لديك حساب؟</p>  
            <Link to="/register" className="fw-bolder text-decoration-underline text-dark" >
               إنشاء حساب
             </Link>
        </div>

    

      </form>
    </div>
  );
}

export default Login;
