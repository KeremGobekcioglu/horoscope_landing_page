import "./SignIcon.css";

function SignIcon({ sign, size = 32, className = "" }) {
  return (
    <span
      className={`yz-sign-icon ${className}`}
      style={{
        width: size,
        height: size,
        WebkitMaskImage: `url(/signs/${sign}.png)`,
        maskImage: `url(/signs/${sign}.png)`,
      }}
    />
  );
}

export default SignIcon;
