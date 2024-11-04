import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateElement } from "../../reducers/elementsReducer";
import { closeLeftTab } from "../../reducers/platformReducer";

const ImageConfiguration = ({ elementId }) => {
  const dispatch = useDispatch();
  const [url, setUrl] = useState("");
  const [altText, setAltText] = useState("");
  const { elementsById } = useSelector((state) => state.elements);
  const element = elementsById[elementId];
  const onSubmit = (event) => {
    event.preventDefault();
    const newMetadata = {
      ...element.metadata,
      url: url,
    };
    dispatch(updateElement({ elementId, metadata: newMetadata }));
    dispatch(closeLeftTab());
  };

  const onUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const onAltTextChange = (event) => {
    setAltText(event.target.value);
  };
  useEffect(() => {
    if (element) {
      setUrl(element?.metadata?.url ?? "");
    }
  }, []);
  return (
    <form
      style={{
        marginTop: "3rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }}
      onSubmit={onSubmit}
    >
      <div className="form-group">
        <label htmlFor="url">Url</label>
        <input
          id="url"
          className="form-control"
          type="url"
          placeholder=""
          value={url}
          onChange={onUrlChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="altText">Alt Text</label>
        <input
          id="altText"
          className="form-control"
          type="text"
          placeholder=""
          value={altText}
          onChange={onAltTextChange}
        />
      </div>
      <button className="btn btn-light5" type="submit">
        Save
      </button>
    </form>
  );
};

export default ImageConfiguration;
