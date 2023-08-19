import uvicorn

if __name__ == '__main__':
    print('http://localhost:8999/docs')
    print('http://localhost:8999/redoc')
    uvicorn.run(app="app:app", host="0.0.0.0", port=8999, reload=True, workers=4)
