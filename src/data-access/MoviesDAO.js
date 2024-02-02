import {  ObjectId } from "mongodb";
import { getDb } from "./getDb.js";
import { makeNewMovie } from "../domain/NewMovies.js";



export async function findAll(collection) {
    const db = await getDb();
    const movieArray = await db.collection(collection).find({}).toArray();
    return movieArray;
};

export async function insertOne(collection, movieNewInfo) {
    const db = await getDb();
    console.log(movieNewInfo)
    const { acknowledged, insertedId } = await db
    .collection(collection)
    .insertOne(movieNewInfo);
    if (acknowledged) return makeNewMovie({ ...movieNewInfo, _id: insertedId });
    else return null;
};


export async function deletedById(collection,movieId) {
    const db = await getDb();
    console.log(movieId)
    const result = await db.collection(collection).findOneAndDelete({_id: ObjectId.createFromHexString(movieId)});
    return result ;
};


export const updateOne = async (collection, updatedMovie) => {
    const db = await getDb();
    const id = updatedMovie._id;
    console.log(id)
    delete updatedMovie._id;

    const result = await db.collection(collection).findOneAndReplace(
        { _id: ObjectId.createFromHexString(id) }, 
        updatedMovie,
        { returnDocument: "after" } 
    );
        console.log(result)
    return result; 
};

export async function getById(collection, movieId) {
    const db = await getDb();
    const movie = await db.collection(collection).findOne({_id: ObjectId.createFromHexString(movieId)});
    return movie;
};

export async function getBySearchinput(collection, searchinput) {
    const db = await getDb();
    const movie = await db.collection(collection).find({ title:{$regex: searchinput}}).toArray();
    return movie;
};