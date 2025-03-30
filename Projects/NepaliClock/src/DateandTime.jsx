function DateandTime() {
  let Time = new Date();
  return (
    <>
      <p className="lead">
        The curret date and time in Nepal is : {Time.toLocaleDateString()}-
        {Time.toLocaleTimeString()}
      </p>
    </>
  );
}
export default DateandTime;
