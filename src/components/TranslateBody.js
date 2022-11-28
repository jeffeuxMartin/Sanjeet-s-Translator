import React from "react";
import { Form, TextArea, Button, Icon } from "semantic-ui-react";
import PropTypes from "prop-types";

export default function TranslateBody({
  className,
  resultText,
  languagesList,
  handleLanguageKeyOnChange,
  handleTranslateTextOnClick,
  setInputText,
}) {
  return (
    <Form className={className}>
      <Form.Field
        control={TextArea}
        placeholder="Type Text to Translate.."
        onChange={(e) => setInputText(e.target.value)}
      />

      <select className="language-select" onChange={handleLanguageKeyOnChange}>
        <option>Please Select Language..</option>
        {languagesList.map((language) => {
          return (
            <option key={language.code} value={language.code}>
              {language.name}
            </option>
          );
        })}
      </select>

      <Form.Field
        control={TextArea}
        placeholder="Your Result Translation.."
        value={resultText}
      />

      <Button color="orange" size="large" onClick={handleTranslateTextOnClick}>
        <Icon name="translate" />
        Translate
      </Button>
    </Form>
  );
}

TranslateBody.propTypes = {
  className: PropTypes.string.isRequired,
  resultText: PropTypes.string.isRequired,
  languagesList: PropTypes.array.isRequired,
  setInputText: PropTypes.func.isRequired,
  handleLanguageKeyOnChange: PropTypes.func.isRequired,
  handleTranslateTextOnClick: PropTypes.func.isRequired,
};
