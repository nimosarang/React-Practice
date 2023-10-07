import { useForm } from "react-hook-form";
import "./App.css";

export default function Form() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const login = async (user) => {
    const response = await fetch("http://localhost:3333/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(login)}>
      <div>
        유저아이디
        <input
          type="text"
          {...register("userId", {
            minLength: {
              value: 4,
              message: "아이디는 4글자 이상 입력해야 합니다.",
            },
          })}
        />
        {errors?.userId && (
          <div className="error">{errors?.userId.message}</div>
        )}
      </div>
      <div>
        비밀번호
        <input
          type="password"
          {...register("password", {
            validate: {
              requiredA: (value) =>
                value.includes("a") || "비밀번호에 반드시 a가 들어가야 합니다.",
            },
          })}
        />
        {errors?.password && (
          <div className="error">{errors?.password.message}</div>
        )}
      </div>
      <div>
        닉네임
        <input type="text" {...register("nickName")} />
      </div>
      <button type="submit">회원가입</button>
    </form>
  );
}
