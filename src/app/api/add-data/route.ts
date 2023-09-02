import sqlite3 from "sqlite3";
import { open } from "sqlite";
import { NextRequest, NextResponse } from "next/server";
interface BodyProps {
  
    id: string,
    name: string,
    pay: string,
    value: string,
    description: string,
}


export const POST = async function(  req: Request) {
  if (req.method === "POST") {

    try {
      const json: BodyProps = await req.json();

      // const { name, pay, value, description } = req.body;
      console.log(req.body)
      // Open the SQLite database connection
      const db = await open({
        filename: "./collection.db",
        driver: sqlite3.Database,
      });

      // Insert the data into the "items" table
      await db.run(
        "INSERT INTO items (name, pay, value, description) VALUES (?, ?, ?, ?)",
        [json.name, json.pay, json.value, json.description]
      );

      // Close the database connection
      await db.close();

    } catch (error: any) {
      if (error.code === "P2002") {
        let error_response = {
          status: "fail",
          message: "Feedback with title already exists",
        };
        return new NextResponse(JSON.stringify(error_response), {
          status: 409,
          headers: { "Content-Type": "application/json" },
        });
      }
  
      let error_response = {
        status: "error",
        message: error.message,
      };
      return new NextResponse(JSON.stringify(error_response), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }
};