import Post from "@/app/Components/Post";

export default function SavedPost() {
    return (
        <>
            <div className="flex flex-col w-full gap-0">
                <h1 className="text-4xl font-bold text-gray-300">Saved Post</h1>
                <div className="flex flex-col justify-center items-center">
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
        </>
    )
}