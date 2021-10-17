import * as Yup from 'yup'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Field, Form, Formik } from 'formik'
import { Input } from '@chakra-ui/input'
import { Button } from '@chakra-ui/button'
import { Textarea } from '@chakra-ui/textarea'
import { FormControl, FormErrorMessage } from '@chakra-ui/form-control'

import { useUpdatePostMutation } from '../postsAPI'
import { selectUserId } from 'features/users/usersSlice'

const PostEditForm = ({ data }) => {
  const { id, title, body } = data

  const userId = useSelector(selectUserId)
  const [updatePost, { isLoading }] = useUpdatePostMutation()

  const handleEditPost = async (value) => {
    value.id = id
    value.userId = userId
    await updatePost(value)
  }

  return (
    <Formik
      initialValues={{
        title: title,
        body: body,
      }}
      validationSchema={Yup.object({
        title: Yup.string().required('Title is required'),
        body: Yup.string().required('Body text is required'),
      })}
      onSubmit={handleEditPost}
    >
      <Form>
        <Field name="title" type="text">
          {({ field, form }) => (
            <FormControl marginBlock="4" isInvalid={form.errors.title && form.touched.title}>
              <Input {...field} id="title" placeholder="Title" type="text" />
              <FormErrorMessage>{form.errors.title}</FormErrorMessage>
            </FormControl>
          )}
        </Field>
        <Field name="body" type="text">
          {({ field, form }) => (
            <FormControl marginBlock="4" isInvalid={form.errors.body && form.touched.body}>
              <Textarea {...field} id="body" resize="vertical" placeholder="What do you think?" />
              <FormErrorMessage>{form.errors.body}</FormErrorMessage>
            </FormControl>
          )}
        </Field>
        <Button type="submit" variant="solid" colorScheme="blue" isLoading={isLoading} width="100%" marginBottom="4">
          Edit Post
        </Button>
      </Form>
    </Formik>
  )
}

PostEditForm.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
  }),
}

export default PostEditForm
