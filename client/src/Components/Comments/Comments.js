import React from 'react'

const Comments = ({
  user
}) => {

  console.log(user)

  return (
    <div className="app container py-4">
    <div className="col-md-10 col-lg-8 m-auto">
      <div className="bg-white rounded-3 shadow-sm p-4 mb-4">
        {/* New Comment //*/}
        <div className="d-flex">
          <img
            className="rounded-circle me-3"
            style={{ width: "3rem", height: "3rem" }}
            src={"https://via.placeholder.com/128/fe669e/ffcbde.png?text=S"}
          />
          <div className="flex-grow-1">
            <div className="hstack gap-2 mb-1">
              <a href="#" className="fw-bold link-dark">
                {user ? user.email : <p>Unknown</p>}
              </a>
            </div>
            <div className="form-floating mb-3">
              <textarea
                className="form-control w-100"
                placeholder="Leave a comment here"
                id="my-comment"
                style={{ height: "7rem" }}
                defaultValue={""}
              />
              <label htmlFor="my-comment">Leave a comment here</label>
            </div>
            <div className="hstack justify-content-end gap-2">
              <button className="btn btn-sm btn-link link-secondary text-uppercase">
                cancel
              </button>
              <button className="btn btn-sm btn-primary text-uppercase">
                comment
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-3 shadow-sm p-4"></div>
    </div>
  </div>
  )
}

export default Comments