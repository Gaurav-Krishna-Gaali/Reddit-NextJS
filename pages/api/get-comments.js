/* eslint-disable import/no-anonymous-default-export */
import { supabase } from "../../services/supabaseClient";

export default async (req, res) => {
  try {
    console.log(req.query);
    {
      console.log("gwet-comments try block");
    }

    const { data } = await supabase
      .from("comments")
      .select("*, users!inner(*)")
      .eq("postId", parseInt(req.query.postId));

    res.status(200).send({ data: data });

    console.log(data);
  } catch (error) {
    res.status(500).send({ error: "Error fetching comments" });
  }
};
