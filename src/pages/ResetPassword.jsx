import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!password || !confirmPassword) {
      setError("من فضلك أدخل كلمة المرور");
      return;
    }

    if (password !== confirmPassword) {
      setError("كلمتا المرور غير متطابقتين");
      return;
    }

    setSuccess("تم تغيير كلمة المرور بنجاح");

    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center p-5">
      <form
        className="login-form px-5 py-4 rounded-4"
        dir="rtl"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center my-5">انشئ كلمة مرور جديدة</h2>
   

        <label className="mb-2">كلمة المرور الجديدة</label>
        <input
          type="password"
          placeholder="كلمة المرور الجديدة"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className="my-2">تأكيد كلمة المرور</label>

        <input
          type="password"
          placeholder="تأكيد كلمة المرور"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {error && (
          <p className="text-danger text-center">{error}</p>
        )}

        {success && (
          <p className="text-success text-center">{success}</p>
        )}

        <button type="submit" className="my-3 ">
          تحديث كلمة المرور
        </button>

        <div className=" mt-2">
          <Link
            to="/login"
            className="text-decoration-underline text-dark"
          >
            العودة إلى تسجيل الدخول
          </Link>
        </div>
      </form>
    </div>
  );
}

export default ResetPassword;
