import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, ModalHeader, ModalBody} from "reactstrap";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(3),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Basic info.", "Essential info.", "Additional info."];
}

export default function AddBookModel(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [book_name, set_book_name] = React.useState("");
  const [author_name, set_author_name] = React.useState("");
  const [subjects, set_subjects] = React.useState("");
  const [image_name, set_image_name] = React.useState("");
  const [select_class, set_select_class] = React.useState("");
  const [institution_name, set_institution_name] = React.useState("");
  const [medium, set_medium] = React.useState("");
  const [type_of_board, set_type_of_board] = React.useState("");
  const [stream, set_stream] = React.useState("");
  const [category_of_book, set_category_of_book] = React.useState("");
  const [condition_of_book, set_condition_of_book] = React.useState("");
  const [discription, set_discription] = React.useState("");
  const [price_of_book, set_price_of_book] = React.useState("");
  const [myFile, set_myFile] = React.useState("");
  const [count, set_count] = React.useState(0);

  const steps = getSteps();

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <div className="container">
            <div className="row row-content">
              <div className="col-12 col-sm-6 col-content">
                <div class="form-group">
                  <label for="exampleFormControlSelect1">select class</label>
                  <select
                    class="form-control"
                    id="exampleFormControlSelect1"
                    value={select_class}
                    onChange={(event) => {
                      set_select_class(event.target.value);
                    }}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="usrname">Subject Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="usrname"
                    placeholder="Enter subject  name"
                  />
                </div>
                <div class="form-group">
                  <label for="usrname">Book Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="usrname"
                    placeholder="Enter book name here.."
                    value={book_name}
                    onChange={(event) => {
                      set_book_name(event.target.value);
                    }}
                  />
                </div>
                <div class="form-group">
                  <label for="usrname">Author Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="usrname"
                    placeholder="Enter author name.."
                    value={author_name}
                    onChange={(event) => {
                      set_author_name(event.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="container">
            <div className="row row-content">
              <div className="col-12 col-sm-6 col-content">
                <div class="form-group">
                  <label for="usrname">Stream</label>
                  <input
                    type="text"
                    class="form-control"
                    id="usrname"
                    placeholder="Enter stream here arts/science/.."
                    value={stream}
                    onChange={(event) => {
                      set_stream(event.target.value);
                    }}
                  />
                </div>

                <div class="form-group">
                  <label for="usrname">school/college Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="usrname"
                    placeholder="Rajasthan technical university.."
                    value={institution_name}
                    onChange={(event) => {
                      set_institution_name(event.target.value);
                    }}
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">select Medium</label>
                  <select
                    class="form-control"
                    id="exampleFormControlSelect1"
                    value={medium}
                    onChange={(event) => {
                      set_medium(event.target.value);
                    }}
                  >
                    <option>English</option>
                    <option>Hindi</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="usrname">Type of board</label>
                  <input
                    type="text"
                    class="form-control"
                    id="usrname"
                    placeholder="RBSE/CBSE/.."
                    value={type_of_board}
                    onChange={(event) => {
                      set_type_of_board(event.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="container">
            <div className="row row-content">
              <div className="col-12 col-sm-6 col-content">
                <div class="form-group">
                  <label for="psw">category of books</label>
                  <input
                    type="text"
                    class="form-control"
                    id="psw"
                    placeholder=""
                    value={category_of_book}
                    onChange={(event) => {
                      set_category_of_book(event.target.value);
                    }}
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">
                    Condition Of book
                  </label>
                  <select
                    class="form-control"
                    id="exampleFormControlSelect1"
                    value={condition_of_book}
                    onChange={(event) => {
                      set_condition_of_book(event.target.value);
                    }}
                  >
                    <option>poor</option>
                    <option>Moderate</option>
                    <option>Good</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="psw">price of book </label>
                  <input
                    type="text"
                    class="form-control"
                    id="psw"
                    placeholder="enter price here"
                    value={price_of_book}
                    onChange={(event) => {
                      set_price_of_book(event.target.value);
                    }}
                  />
                </div>
                <div class="form-group">
                  <label for="psw">Upload Your Book Image Here </label>
                  <input
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                    onChange={(event) => {
                      set_myFile(event.target.files[0]);
                    }}
                  />
                </div>

                <div class="form-group">
                  <label for="exampleFormControlTextarea1">
                    Detail Description
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="4"
                    value={discription}
                    onChange={(event) => {
                      set_discription(event.target.value);
                    }}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return "Unknown stepIndex";
    }
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const shouldUpdateInitialState = () => {
    const { data } = props;
    return count === 0 && data && data.class;
  };

  const { data } = props;
  // console.log('fsdfsfsfsbgncvb' , this.state.myFile);
  if (shouldUpdateInitialState()) {
    set_book_name(data.book_name || book_name);
    set_author_name(data.author_name || author_name);
    set_subjects(data.subjects || subjects);
    set_select_class(data.select_class || select_class);
    set_institution_name(data.institution_name || institution_name);
    set_medium(data.medium || medium);
    set_type_of_board(data.type_of_board || type_of_board);
    set_stream(data.stream || stream);
    set_category_of_book(data.category_of_book || category_of_book);
    set_condition_of_book(data.condition_of_book || condition_of_book);
    set_discription(data.discription || discription);
    set_price_of_book(data.price_of_book || price_of_book);
    set_count(1);
  }

  return (
    <div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog">
        <Modal
          isOpen={props.isModalOpen}
          toggle={props.toggleModal}
          className="seller-model_class"
        >
          <div className={classes.root}>
            <ModalHeader toggle={props.toggleModal}></ModalHeader>
            <ModalBody>
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>

              <div>
                {activeStep === steps.length ? (
                  <div>
                    <Typography className={classes.instructions}>
                      All steps completed
                    </Typography>
                    <Button onClick={handleReset}>Reset</Button>
                  </div>
                ) : (
                  <div>
                    <Typography className={classes.instructions}>
                      {getStepContent(activeStep)}
                    </Typography>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.backButton}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          handleNext();
                          if (activeStep === steps.length - 1) {
                            props.handleSubmit({
                              user_id: "1",
                              book_name: book_name,
                              author_name: author_name,
                              subjects: subjects,
                              image_name: image_name,
                              class: select_class,
                              institution_name: institution_name,
                              medium: medium,
                              type_of_board: type_of_board,
                              stream: stream,
                              category_of_book: category_of_book,
                              condition_of_book: condition_of_book,
                              discription: discription,
                              price_of_book: price_of_book,
                              myFile: myFile,
                            });
                          }
                        }}
                      >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </ModalBody>
          </div>
        </Modal>
      </div>
    </div>
  );
}
