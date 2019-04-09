import React from 'react'
import { Form } from 'semantic-ui-react'

const TextArea = ({input, rows, type, placeholder, meta: {touched,error}  }) => {
  return (
    <Form.Field error={touched && !!error}>
    <textarea {...input} placeholder={placeholder} row={rows}></textarea>
    </Form.Field>

  )
}

export default TextArea
