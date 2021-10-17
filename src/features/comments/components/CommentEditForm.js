import * as Yup from 'yup'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { Field, Form, Formik } from 'formik'
import { Button } from '@chakra-ui/button'
import { Textarea } from '@chakra-ui/textarea'
import { FormControl, FormErrorMessage } from '@chakra-ui/form-control'

import { selectPostId } from 'features/posts/postsSlice'
import { useUpdateCommentMutation } from '../commentsAPI'
import { selectAllLocalComments, updateLocalComment } from '../commentsSlice'

const CommentEditForm = ({ data, onClose }) => {
  const { id, name, email, body } = data

  const dispatch = useDispatch()
  const postId = useSelector(selectPostId)
  const localComments = useSelector(selectAllLocalComments)
  const [updateComment, { isLoading }] = useUpdateCommentMutation()

  const handleUpdateComment = async (value) => {
    value.postId = postId
    value.id = id
    value.name = name
    value.email = email

    if (localComments.includes(id)) {
      dispatch(updateLocalComment(value))
    } else {
      await updateComment(value)
    }

    if (isLoading === false) onClose()
  }

  return (
    <Formik
      initialValues={{
        body: body,
      }}
      validationSchema={Yup.object({
        body: Yup.string().required('Body text is required'),
      })}
      onSubmit={handleUpdateComment}
    >
      <Form>
        <Field name="body" type="text">
          {({ field, form }) => (
            <FormControl marginBlock="4" isInvalid={form.errors.body && form.touched.body}>
              <Textarea {...field} id="body" resize="vertical" placeholder="What do you think?" />
              <FormErrorMessage>{form.errors.body}</FormErrorMessage>
            </FormControl>
          )}
        </Field>
        <Button type="submit" variant="solid" colorScheme="blue" isLoading={isLoading} width="100%" marginBottom="4">
          Edit Comment
        </Button>
      </Form>
    </Formik>
  )
}

CommentEditForm.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    body: PropTypes.string,
  }),
  onClose: PropTypes.func,
}

export default CommentEditForm
