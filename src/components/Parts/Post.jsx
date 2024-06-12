/* eslint-disable react/prop-types */
import { cn } from "@/lib/utils";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import * as DateUtils from "../../lib/dateUtils";

const Post = ({ title, description, posted }) => {
  const prettyDate = DateUtils.prettifyDate(posted);

  return (
    <Card className={cn("w-full h-full")}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          <CardDescription>
            <span>{prettyDate}</span>
          </CardDescription>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
};

export default Post;
