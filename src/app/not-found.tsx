import {Suspense} from "react";

export default function CustomNotFoundPage() {
    return(
        <Suspense fallback={<div>Page Not Found</div>}>
            <div> Page not found</div>
        </Suspense>
    )
}