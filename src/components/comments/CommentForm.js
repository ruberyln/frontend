import { useState } from "react";
import Button from "@mui/material/Button"
import { TextField } from "@mui/material";
const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
}) => {
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };
  return (

    <form onSubmit={onSubmit}>
      <TextField id="outlined-basic" label="comment" variant="outlined"
        className="comment-form-textarea"
        value={text}
        fullWidth
        onChange={(e) => setText(e.target.value)}
      
      >
</TextField>

      <Button className="comment-form-button" disabled={isTextareaDisabled}
      onClick={submitLabel} > POST
     </Button>

      {hasCancelButton && (
        <Button
          type="button"
          className="comment-form-button comment-form-cancel-button"
          onClick={handleCancel}
        >
          Cancel
        </Button>
      )}
    </form>
  );
};

export default CommentForm;