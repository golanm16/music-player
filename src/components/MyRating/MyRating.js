import "./MyRating.css"

export const MyRating = ({like,viewCount}) => {
    return (
        <div className="rating">
          {/* <div className="logo-container">
            <img className="logo" src={logo} alt="youtube logo" />
          </div> */}
          <label className="views">👁 {viewCount}</label>
          <br />
          <label className="likes">👍 {like}</label>
          <br />
          <label className="dislikes">👎 {like===false}</label>
        </div>
      );
}