import React, { useState } from "react";
import '../assets/css/styles.css';

export default function SignInApp() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [showCreate, setShowCreate] = useState(false);
    const [create, setCreate] = useState({ name: "", email: "", login: "", password: "" });

    const handleSubmit = (e) => {
        // prevents the default form submission behavior
        e.preventDefault();
        alert(`Signing in as ${login}`);
    };

    const handleCreateEnter = (e) => {
        e.preventDefault();
        //As soon as account is created, auto-fill login fields and hide create form
        setLogin(create.login);
        setPassword(create.password);
        setShowCreate(false);
    };

    return (
        <div className="container py-5">
            {/* gutter space between columns */}
            <div className="row g-3">
                {/* full width on small, half on md+ */}
                <div className="col-12 col-md-6">
                    <h1 className="mb-4">Sign in</h1>
                    {/* for signin form with shadow and padding from all sides */}
                    <form onSubmit={handleSubmit} className="my-custom-card card p-4 shadow">
                        <div className="mb-3">
                            <label className="form-label">Login</label>
                            <input className="form-control" value={login} onChange={e => setLogin(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} required />
                        </div>
                        <div className="d-flex gap-2">
                            <button className="btn btn-primary" type="submit">Submit</button>
                            <button className="btn btn-outline-secondary" type="button" onClick={() => setShowCreate(v => !v)}>Create account</button>
                        </div>
                    </form>
                </div>

                {
                    showCreate && (
                        <div className="col-md-6">
                            <h2 className="mb-4">Create account</h2>
                            <form onSubmit={handleCreateEnter} className="my-custom-card card p-4 shadow-sm">
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input className="form-control" value={create.name} onChange={e => setCreate({ ...create, name: e.target.value })} required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" value={create.email} onChange={e => setCreate({ ...create, email: e.target.value })} required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Login</label>
                                    <input className="form-control" value={create.login} onChange={e => setCreate({ ...create, login: e.target.value })} required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" value={create.password} onChange={e => setCreate({ ...create, password: e.target.value })} required />
                                </div>
                                <button className="btn btn-success" type="submit">Enter</button>
                            </form>
                        </div>
                    )
                }
            </div >
        </div >
    );
}
