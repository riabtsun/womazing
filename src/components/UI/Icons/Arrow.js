const Arrow = ({ color, styles }) => {
  return (
    <svg
      style={styles}
      width="29"
      height="16"
      viewBox="0 0 29 16"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.34742e-08 8L28 8M28 8L20.8108 15M28 8L20.8108 1"
        stroke={color}
      />
    </svg>
  );
};

export default Arrow;
