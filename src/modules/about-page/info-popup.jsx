import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function InfoPopup(props) {
  return (
    <Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Profesional Links</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>LinkedIn Profiles</h4>
        <p>
          <ul>
            <li>
              <a
                style={{ textDecoration: 'underline', color: 'green' }}
                href='https://www.linkedin.com/in/nikoleta-amanatidou/'
                target='_blank'
                rel='noopener noreferrer'>
                Amanatidou Nikoleta
              </a>
            </li>
            <li>
              <a
                style={{ textDecoration: 'underline', color: 'green' }}
                href='https://www.linkedin.com/in/themis-darelis-320a608b/'
                target='_blank'
                rel='noopener noreferrer'>
                Darelis Themis
              </a>
            </li>
            <li>
              <a
                style={{ textDecoration: 'underline', color: 'green' }}
                href='To be'
                target='_blank'
                rel='noopener noreferrer'>
                Zarkada Vasiliki
              </a>
            </li>
            <li>
              <a
                style={{ textDecoration: 'underline', color: 'green' }}
                href='https://www.linkedin.com/in/stylianos-karanikas-8a25a2248/'
                target='_blank'
                rel='noopener noreferrer'>
                Karanikas Stylianos
              </a>
            </li>
            <li>
              <a
                style={{ textDecoration: 'underline', color: 'green' }}
                href='https://www.linkedin.com/in/adamantios-litzerinos-9446a8265/'
                target='_blank'
                rel='noopener noreferrer'>
                Litzerinos Adamantios
              </a>
            </li>
            <li>
              <a
                style={{ textDecoration: 'underline', color: 'green' }}
                href='https://www.linkedin.com/in/ilias-mazarakis-b495242b6/'
                target='_blank'
                rel='noopener noreferrer'>
                Mazarakis Ilias
              </a>
            </li>
            <li>
              <a
                style={{ textDecoration: 'underline', color: 'green' }}
                href='https://www.linkedin.com/in/dimitiriosplastiras/'
                target='_blank'
                rel='noopener noreferrer'>
                Plastiras Dimitrios
              </a>
            </li>
          </ul>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} style={{ backgroundColor: 'green', borderColor: 'green' }}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default InfoPopup;
