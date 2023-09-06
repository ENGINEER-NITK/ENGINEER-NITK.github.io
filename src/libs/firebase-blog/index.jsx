import React, {useEffect, useState} from 'react';
import { FormateDate } from './scripts';
import {Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography, useTheme} from "@mui/material";
import ReactMarkdown from 'react-markdown'
import {updateDoc, doc, collection, onSnapshot } from "firebase/firestore";
import Blog from "./components/Blog";
import BottomSheet from "./components/BottomSheet/BottomSheet";
import {FiX} from "react-icons/fi";
import MDEditor from "@uiw/react-md-editor";

function FireBlog ( { app, db } ,...props) {
  const [blogs, setBlogs] = useState([])
  const [blog, setBlog] = useState(null)

  useEffect(() => {
          const unsub = onSnapshot(collection(db, "posts"), (doc) => {
          setBlogs(doc.docs)
      })

      return unsub
  }, [])

    const blogChangeHandler = (blogDoc) => {
       setBlog(blogDoc)
    }

    const blogCloseHandler = () => {
      setBlog(null)
    }

    const isOpen = Boolean(blog)

    return (
      <div id="content">
          {isOpen && <BottomSheet>
              <BlogDisplay blog={blog} onClose={blogCloseHandler} />
          </BottomSheet>}
          <Grid container spacing={2}>
          {
              blogs?.map(blog => {
                  const data = blog.data()
                  return (<Blog title={data.title}
                                subtitle={data.subtitle}
                                blog={data.blog}
                                cover_image_url={data.cover_image_url}
                                created_at={data.created_at}
                                updated_at={data.updated_at}
                                onChange={blogChangeHandler}
                                doc={blog}
                  />)
              })
          }
          </Grid>
      </div>
    );
}

const BlogDisplay = ({blog, onClose}) => {
    const data = blog.data()
    const theme = useTheme()

    return <>
        <Box mb={3} alignItems={'center'} display='flex'>
            <Typography color={'textPrimary'} noWrap flexGrow={1} variant='body1'>{`${data.title}`}</Typography>
            <Box>
                <IconButton style={{backgroundColor: 'tan'}} size='small' onClick={onClose}>
                    <FiX/>
                </IconButton>
            </Box>
        </Box>


        <MDEditor.Markdown style={{backgroundColor: theme.palette.background.paper, color: theme.palette.text.primary}} source={data.blog}/>

    </>
}


export default FireBlog;

