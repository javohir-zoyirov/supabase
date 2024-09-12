import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import frame from "./image/Frame.png";
import rasm1 from "./image/rasm1.png";
import rasm2 from "./image/rasm2.png";
import rasm3 from "./image/rasm3.png";
import restangle from "./image/Rectangle.png";
function App() {
  return (
    <div className="App bg-black" style={{ position: "relative" }}>
      <nav class="navbar navbar-expand-lg bg-black">
        <div class="container">
          <div className="navbar-brand" style={{ cursor: "pointer" }}>
            <img src={frame} alt="#" />
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Product
                </a>
                <ul class="dropdown-menu bg-black">
                  <li className="bg-black">
                    <a class="dropdown-item text-white" href="#">
                      Action
                    </a>
                  </li>
                  <li className="bg-black">
                    <a class="dropdown-item text-white" href="#">
                      Another action
                    </a>
                  </li>
                  <li className="bg-black">
                    <a class="dropdown-item text-white" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Developers
                </a>
                <ul class="dropdown-menu bg-black">
                  <li className="bg-black">
                    <a class="dropdown-item text-white" href="#">
                      Action
                    </a>
                  </li>
                  <li className="bg-black">
                    <a class="dropdown-item text-white" href="#">
                      Another action
                    </a>
                  </li>
                  <li className="bg-black">
                    <a class="dropdown-item text-white" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item" style={{ cursor: "pointer" }}>
                <a class="nav-link disabled text-white" aria-disabled="true">
                  Beta
                </a>
              </li>
              <li class="nav-item" style={{ cursor: "pointer" }}>
                <a class="nav-link disabled text-white" aria-disabled="true">
                  Pricing
                </a>
              </li>
            </ul>
            <div>
              <button
                style={{
                  background: "#24B47E",
                  boxShadow: "0px 2px 0px 0px #0000000B",
                }}
                className="btn text-white border-0 py-1"
              >
                Start your project
              </button>
              <button style={{}} className="btn text-white border-0 py-1">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="row container mx-auto mt-5 pt-5">
        <div className="col-lg-6 col-12 div1">
          <div className="my-auto">
            <div>
              <div className="d-flex align-items-center gap-2">
                <span className="py-1 px-2 bg-white rounded-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-archive-fill"
                    viewBox="0 0 16 16"
                    color="#6A6A6A"
                  >
                    <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z" />
                  </svg>
                </span>
                <p className="p-0 m-0 text-white">Storage</p>
              </div>
              <h1 className="fw-bold text-white my-3">
                Store and serve any type of digital content
              </h1>
              <p className="" style={{ color: "#E0E0E0" }}>
                An open source Object store service with unlimited scalability,
                for any file type.
              </p>
              <p className="" style={{ color: "#E0E0E0" }}>
                With custom policies and permissions that are familiar and easy
                to implement.
              </p>
              <button
                style={{
                  background: "#24B47E",
                  boxShadow: "0px 2px 0px 0px #0000000B",
                }}
                className="btn text-white border-0 mt-4 py-1"
              >
                Start a project
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12 div2">
          <img className="w-100" src={rasm1} />
        </div>
      </div>

      <div className="row container mt-4 mx-auto">
        <div className="col-lg-4">
          <div>
            <div className="d-flex align-items-center gap-2">
              <span className="py-1 px-2 bg-white rounded-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-archive-fill"
                  viewBox="0 0 16 16"
                  color="#6A6A6A"
                >
                  <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z" />
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-x-lg text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>
              </span>
              <span className="py-1 px-2 bg-white rounded-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-key"
                  viewBox="0 0 16 16"
                  color="#6A6A6A"
                >
                  <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8m4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5" />
                  <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-x-lg text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>
              </span>
              <span className="py-1 px-2 bg-white rounded-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-vinyl-fill"
                  viewBox="0 0 16 16"
                  color="#6A6A6A"
                >
                  <path d="M8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0" />
                </svg>
              </span>
            </div>
            <p className="text-white pt-3">Interoperable</p>
            <p className="text-white">
              Integrates well with the rest of Supabase ecosystem, including
              Auth and Postgres.
            </p>
          </div>
        </div>

        <div className="col-lg-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              class="bi bi-bar-chart"
              viewBox="0 0 16 16"
              color="#A1A1A1"
            >
              <path d="M4 11H2v3h2zm5-4H7v7h2zm5-5v12h-2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z" />
            </svg>
            <p className="text-white pt-3">Lightning fast</p>
            <p className="text-white">
              Thin API server layer that leverages Postgres' permissions and
              performance.
            </p>
          </div>
        </div>

        <div className="col-lg-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              class="bi bi-check-square"
              viewBox="0 0 16 16"
              color="#A1A1A1"
            >
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
              <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
            </svg>
            <p className="text-white pt-3">Dependable</p>
            <p className="text-white">
              Enterprise-level scalability and durability.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-5  pt-5">
        <h1 className="text-white">Sleek dashboard for managing your media</h1>
        <h5 className="text-white">
          A complete Object Explorer so that any of your team can use.
        </h5>
        <p className="text-white mb-4">
          Drag and drop uploading, moving objects, and multiple object
          selection. As easy as working on your desktop.
        </p>
        <div className="row">
          <div className="col-lg-7">
            <div className="d-flex align-items-center gap-2 flex-wrap my-3">
              <button
                style={{ color: "#666666" }}
                className="btn border-0 fw-bold"
              >
                File previews
              </button>
              <button
                style={{ color: "#666666" }}
                className="btn border-0 fw-bold"
              >
                Column view
              </button>
              <button
                style={{ color: "#666666" }}
                className="btn border-0 fw-bold"
              >
                List view
              </button>
              <button
                style={{ color: "#666666" }}
                className="btn border-0 fw-bold"
              >
                Multi select actions
              </button>
              <button
                style={{ color: "#666666" }}
                className="btn border-0 fw-bold"
              >
                Path navigator
              </button>
            </div>
            <div>
              <img className="w-100" src={rasm2} alt="#" />
            </div>
          </div>
          <div className="col-lg-5 p-3">
            <h5 className="text-white">File previews</h5>
            <p className="text-white">
              Preview any media type, including video and audio.
            </p>
            <p className="text-white">Check out our example app</p>
            <div style={{ background: "#1F1F1F" }} className="p-3 rounded">
              <p className="text-white">Profile management example</p>
              <p className="text-white">
                Update a user account with public profile information, including
                uploading a profile image.
              </p>
              <p className="text-white">
                Created by:{" "}
                <span className="px-2">
                  <img src={restangle} alt="#" />
                </span>
                supabase
              </p>
            </div>

            <div className="border-bottom p-3 pt-5">
              <p className="text-white">
                nextjs-ts-user-management{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
              </p>

              <button className="btn btn-primary fw-bold">
                <span className="pe-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-caret-up-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                  </svg>
                </span>
                <span className="border-start ps-2">Deploy</span>
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-5 ">
          <div className="col-lg-6">
            <div className="text-white">
              <h1>Simple and convenient APIs</h1>
              <p>Built from the ground-up for interoperable authentication.</p>
              <p>
                Fast and easy to implement using our powerful library clients.
                Asset optimization and image transformation coming soon!
              </p>
              <div className="d-flex align-items-center justify-content-between mt-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-wifi"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.44 12.44 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.52.52 0 0 0 .668.05A11.45 11.45 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049" />
                    <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.46 9.46 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065m-2.183 2.183c.226-.226.185-.605-.1-.75A6.5 6.5 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.5 5.5 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091zM9.06 12.44c.196-.196.198-.52-.04-.66A2 2 0 0 0 8 11.5a2 2 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z" />
                  </svg>
                  <p className="mt-4">CDN integration</p>
                  <p>Serve from the edge to reduce latency.</p>
                  <button className="btn" style={{ color: "#4299E1" }}>
                    Coming soon
                  </button>
                </div>

                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-shuffle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.6 9.6 0 0 0 7.556 8a9.6 9.6 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.6 10.6 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.6 9.6 0 0 0 6.444 8a9.6 9.6 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5"
                    />
                    <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192" />
                  </svg>
                  <p className="mt-4">Auto transformation & optimisation</p>
                  <p>Resize and compress your media before you serve it.</p>
                  <button className="btn" style={{ color: "#4299E1" }}>
                    Coming soon
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex align-items-center gap-2 flex-wrap my-3">
              <button
                style={{ color: "#666666"}}
                className="btn border-0 fw-bold"
              >
                Upload a file
              </button>
              <button
                style={{ color: "#666666" }}
                className="btn border-0 fw-bold"
              >
                Download a file
              </button>
              <button
                style={{ color: "#666666" }}
                className="btn border-0 fw-bold"
              >
                List files
              </button>
              <button
                style={{ color: "#666666" }}
                className="btn border-0 fw-bold"
              >
                Move and rename files
              </button>
              <button
                style={{ color: "#666666" }}
                className="btn border-0 fw-bold"
              >
                Delete files
              </button>
            </div>
            <img className="w-100" src={rasm3} alt="#" />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="text-white" >
              <h1>Integrates natively with Supabase Auth</h1>
              <p className="my-5">
                Using Postgres Row Level Security to create Object access rules.
              </p>
              <p>
                Storage Authorization is built around Postgres so that you can
                use any combination of SQL, Postgres functions, and even your
                own metadata to write policies.
              </p>
              <button
                className="btn border-0 mt-3"
                style={{ background: "#2A2A2A" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-up-right"
                  viewBox="0 0 16 16"
                  color="#A1A1A1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
                <span className="ms-3 text-white">Expore documentation</span>
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex align-items-center gap-2 flex-wrap my-3">
              <button
                style={{ color: "#666666" }}
                className="btn border-0 fw-bold"
              >
                Upload a file
              </button>
              <button
                style={{ color: "#666666" }}
                className="btn border-0 fw-bold"
              >
                Download a file
              </button>
              <button
                style={{ color: "#666666" }}
                className="btn border-0 fw-bold"
              >
                List files
              </button>
              <button
                style={{ color: "#666666" }}
                className="btn border-0 fw-bold"
              >
                Move and rename files
              </button>
              <button
                style={{ color: "#666666" }}
                className="btn border-0 fw-bold"
              >
                Delete files
              </button>
            </div>
            <img className="w-100" src={rasm3} alt="#" />
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-white">Build in a weekend, scale to millions</h2>
          <button
            style={{
              background: "#24B47E",
              boxShadow: "0px 2px 0px 0px #0000000B",
            }}
            className="btn text-white border-0 py-1 text-white my-3"
          >
            Start your project
          </button>
        </div>
      </div>

      <div className="container mx-auto py-3 mt-5 d-flex justify-content-between flex-wrap">
        <ul>
          <li>
            <img src={frame} />
          </li>
          <li className="mt-4">
            <div className="d-flex align-items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-twitter"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
            </div>
          </li>
        </ul>
        <ul>
          <li className="" style={{color:"#666666"}}>Product</li>
          <li>Database</li>
          <li>Authentication</li>
          <li>Storage</li>
          <li>Functions Coming soon</li>
          <li>Pricing</li>
        </ul>
        <ul>
          <li className="" style={{color:"#666666"}}>Resources</li>
          <li>Support</li>
          <li>Case Studies</li>
          <li>System Status</li>
          <li>Terms of service</li>
        </ul>
        <ul>
          <li className="" style={{color:"#666666"}}>Developers</li>
          <li>Documentation</li>
          <li>API Reference</li>
          <li>Guides</li>     
        </ul>
        <ul>
          <li className="" style={{color:"#666666"}}>Company</li>
          <li>Blog</li>
          <li>Open Source</li>
          <li>Humans.txt</li>
          <li>Lawyers.txt</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
