import * as Yup from 'yup'
import { useSelector } from 'react-redux'
import { Field, Form, Formik } from 'formik'
import { Button } from '@chakra-ui/button'
import { Textarea } from '@chakra-ui/textarea'
import { FormControl, FormErrorMessage } from '@chakra-ui/form-control'

import { selectPostId } from 'features/posts/postsSlice'
import { useAddCommentMutation } from '../commentsAPI'

const PostAddForm = () => {
  const postId = useSelector(selectPostId)
  const [addComment, { isLoading }] = useAddCommentMutation()

  const handleAddComment = async (value, { resetForm }) => {
    value.postId = postId
    value.name = 'You'
    value.email = 'kumparan-social@mail.com'
    await addComment(value)

    if (isLoading === false) resetForm({})
  }

  return (
    <Formik
      initialValues={{
        body: '',
      }}
      validationSchema={Yup.object({
        body: Yup.string().required('Body text is required'),
      })}
      onSubmit={handleAddComment}
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
          Add Comment
        </Button>
      </Form>
    </Formik>
  )
}

export default PostAddForm
