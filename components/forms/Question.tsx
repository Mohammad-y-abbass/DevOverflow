'use client';
import React, { useRef, useState } from 'react';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { QuestionValidation } from '@/lib/validations';
import { Editor } from '@tinymce/tinymce-react';

function onSubmit(values: z.infer<typeof QuestionValidation>) {
  // Do something with the form values.
  // ✅ This will be type-safe and validated.
  console.log(values);
}

const Question = () => {
  const form = useForm<z.infer<typeof QuestionValidation>>({
    resolver: zodResolver(QuestionValidation),
    defaultValues: {
      title: '',
      explanation: '',
      tags: [],
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex w-full flex-col gap-10'
      >
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem className='flex w-full flex-col'>
              <FormLabel className='paragraph-semibold text-dark400_light800'>
                Question Title <span className='text-primary-500'>*</span>
              </FormLabel>
              <FormControl className='mt-3.5'>
                <Input
                  className='paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border'
                  {...field}
                />
              </FormControl>
              <FormDescription className='body-regular mt-2.5 text-light-500'>
                Be specific and imagine you&apos;re asking a question to another
                person.
              </FormDescription>
              <FormMessage className='text-red-500' />
            </FormItem>
          )}
        />
        <Editor
          apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
          init={{
            height: 350,
            menubar: false,
            plugins: [
              'advlist',
              'autolink',
              'lists',
              'link',
              'image',
              'charmap',
              'preview',
              'anchor',
              'searchreplace',
              'visualblocks',
              'codesample',
              'fullscreen',
              'insertdatetime',
              'media',
              'table',
              'wordcount',
            ],
            toolbar:
              'undo redo | ' +
              'codesample | bold italic forecolor | alignleft aligncenter |' +
              'alignright alignjustify | bullist numlist outdent indent',
            content_style: 'body { font-family:Inter; font-size:16px }',
          }}
          initialValue='Welcome to TinyMCE!'
        />
        <Button className='w-full' type='submit'>
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default Question;
