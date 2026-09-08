import os
from flask import Flask, render_template, request, redirect, url_for, session

app = Flask(__name__)

app.secret_key = "ulang-tahun-rahasia-123"

NAMA_BENAR = "Riel"
TANGGAL_LAHIR = "09-09-2003"


@app.route("/", methods=["GET", "POST"])
def login():

    if request.method == "POST":

        nama = request.form["nama"].strip()
        tanggal_lahir = request.form["tanggal_lahir"].strip()

        if (
            nama.lower() == NAMA_BENAR.lower()
            and tanggal_lahir == TANGGAL_LAHIR
        ):
            session["login"] = True
            return redirect(url_for("birthday"))

        return render_template(
            "login.html",
            error="Nama atau tanggal lahir tidak cocok ❤️"
        )

    return render_template("login.html")


@app.route("/birthday")
def birthday():

    if not session.get("login"):
        return redirect(url_for("login"))

    return render_template("index.html")


@app.route("/logout")
def logout():

    session.clear()
    return redirect(url_for("login"))


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)