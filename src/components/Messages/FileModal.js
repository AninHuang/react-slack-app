import React from "react";
// 網際網路媒體類型（Internet media type，也稱為MIME類型（MIME type）或內容類型（content type））是給網際網路上傳輸的內容賦予的分類類型。
import mime from "mime-types";
import { Modal, Input, Button, Icon } from "semantic-ui-react";

class FileModal extends React.Component {
  state = {
    file: null,
    authorized: ["image/jpeg", "image/png"]
  };

  addFile = event => {
    const file = event.target.files[0];
    if (file) {
      this.setState({ file });
    }
  };


  /** 傳 送 檔 案 */
  sendFile = () => {
    const { file } = this.state;
    const { uploadFile, closeModal } = this.props;

    if (file !== null) {
        console.log(file)
      if (this.isAuthorized(file.name)) {
        const metadata = { contentType: mime.lookup(file.name) };
        console.log(metadata)
        uploadFile(file, metadata);
        closeModal();
        this.clearFile();
      }
    }
  };

  isAuthorized = filename =>
    this.state.authorized.includes(mime.lookup(filename));

  clearFile = () => this.setState({ file: null });

  render() {
    const { modal, closeModal } = this.props;

    return (
      <Modal basic open={modal} onClose={closeModal}>
        <Modal.Header>Select an Image File</Modal.Header>
        <Modal.Content>
          <Input
            onChange={this.addFile}
            fluid
            label="File types: jpg, png"
            name="file"
            type="file"
          />
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.sendFile} color="green" inverted>
            <Icon name="checkmark" /> Send
          </Button>
          <Button color="red" inverted onClick={closeModal}>
            <Icon name="remove" /> Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default FileModal;
