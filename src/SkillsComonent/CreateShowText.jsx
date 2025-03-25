export default function CreateShowText({ classWith, title }) {
  let styles={
    fontSize:"1.1rem",
    fontWeight:"500"
  }
  return (
   <div className="container">
    <span id="" style={styles}
    className={classWith}> { title } </span>
   </div>
  );
}