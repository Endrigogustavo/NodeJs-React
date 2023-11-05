import{ randomUUID } from "node:crypto"

class DatabaseMemory{
    #videos = new Map()

    //set, map

    list(){
        return this.#videos.values()
    }

    create(video){
        const videoId = randomUUID()
        this.#videos.set(videoId,video)
    }

    update(id, video){
        this.#videos.update(id,video)
    }

    delete(id){
        this.#videos.delete(id)
    }



}