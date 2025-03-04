export default function CreateShowText({ classWith, title }) {
  let styles={
    // display:"flex",
    // justifyContent:"center",
    // alignItems:"center"
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