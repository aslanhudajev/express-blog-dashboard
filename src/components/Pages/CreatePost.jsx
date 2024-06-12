import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Editor } from "@tinymce/tinymce-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CreatePost = () => {
  const editorRef = useRef(null);
  const [postData, setPostData] = useState({
    title: "",
    content: "",
    description: "",
    published: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const authenticate = async () => {
      try {
        await axios.get("http://localhost:3000/api/dashboard/authenticate", {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });
      } catch (error) {
        console.log(error);
        navigate("/login");
      }
    };

    authenticate();
  }, []);

  const handleFieldChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
    console.log(postData);
  };

  const handleSelectChange = (value) => {
    setPostData({ ...postData, published: JSON.parse(value) });
    console.log(postData);
  };

  const handleContentChange = () => {
    setPostData({ ...postData, content: editorRef.current.getContent() });
    console.log(postData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:3000/api/dashboard/new-post",
        postData,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        },
      );
      navigate("/");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pb-8">
        Create post
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-start">
        <div className="form-field grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="title">Title</Label>
          <Input
            name="title"
            type="title"
            id="title"
            placeholder="Title"
            value={postData.title}
            onChange={handleFieldChange}
          />
          <Label htmlFor="title">Description</Label>
          <Input
            name="description"
            type="description"
            id="description"
            placeholder="Description"
            value={postData.description}
            onChange={handleFieldChange}
          />
        </div>
        <Editor
          apiKey="1b6djfyttstri23a618ikriwgcrv7ajbdkco2a8bryfbbhkq"
          onInit={(_evt, editor) => (editorRef.current = editor)}
          onEditorChange={handleContentChange}
          init={{
            plugins:
              "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown",
            toolbar:
              "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
            tinycomments_mode: "embedded",
            tinycomments_author: "Author name",
            mergetags_list: [
              { value: "First.Name", title: "First Name" },
              { value: "Email", title: "Email" },
            ],
            ai_request: (request, respondWith) =>
              respondWith.string(() =>
                Promise.reject("See docs to implement AI Assistant"),
              ),
          }}
          initialValue="Write your post here..."
        />
        <div className="form-field grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="title">Save as</Label>
          <Select name="published" onValueChange={handleSelectChange}>
            <SelectTrigger>
              <SelectValue placeholder="How would you like to save your post?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="false">Draft</SelectItem>
              <SelectItem value="true">Published</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
};

export default CreatePost;
