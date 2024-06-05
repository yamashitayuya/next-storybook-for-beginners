'use client';

import { getFormProps, getInputProps, useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { LockOutlined } from '@mui/icons-material';
import { Avatar, Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import NextLink from 'next/link';
import { useFormState } from 'react-dom';

import { registerAction } from 'lib/actions/auth';
import { validation } from 'lib/validations/auth';

export default function Register({ onSubmit, registered }: { onSubmit: typeof registerAction; registered?: boolean }) {
  const [lastResult, action] = useFormState(onSubmit, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: validation });
    },
    shouldValidate: 'onBlur',
  });
  return (
    <Container component="main" maxWidth="xs">
      {!registered && (
        <Box className="mt-16 flex flex-col items-center">
          <Avatar className="m-2" sx={{ bgcolor: 'secondary.main' }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" action={action} {...getFormProps(form)} className="mt-6">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="メールアドレス"
                  autoComplete="email"
                  {...getInputProps(fields.email, { type: 'email' })}
                  key={fields.email.key}
                  error={!!fields.email.errors}
                  helperText={fields.email.errors}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="パスワード"
                  autoComplete="new-password"
                  {...getInputProps(fields.password, { type: 'password' })}
                  key={fields.password.key}
                  error={!!fields.password.errors}
                  helperText={fields.password.errors}
                />
              </Grid>
            </Grid>
            {form.errors && <div className="text-center text-red-600">{form.errors}</div>}
            <Button type="submit" fullWidth variant="contained" className="mb-4 mt-6">
              登録
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link component={NextLink} href="login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      )}
      {registered && (
        <Container maxWidth="sm" className="text-center">
          <Link component={NextLink} href="login" variant="body2">
            Go to sign in page.
          </Link>
        </Container>
      )}
    </Container>
  );
}
