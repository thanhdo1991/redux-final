module.exports = {
  entry: './app/app.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      reducer: 'app/reducer/reducer.js',
      store: 'app/storeConf.js',
      action: 'app/action.js',
      List: 'app/components/List.js',
      Note: 'app/components/Note.js',
      NoteForm: 'app/components/NoteForm.js'
    }
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  }
};
