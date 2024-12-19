task default: :install

desc 'Run all tasks'
task :all => [:hooks, :install, :build]

desc 'List available tasks'
task :help do
  system "grep '^[a-z]' Rakefile"
end

task :h => :help

desc 'Install git hooks'
task :hooks do
  Dir.chdir('.git/hooks') do
    FileUtils.ln_s('../../hooks/pre-push', 'pre-push', force: true)
  end
end

desc 'Install dependencies'
task :install do
  system 'bundle config set --local path vendor/bundle'
  system 'bundle install'
end

desc 'Upgrade dependencies'
task :upgrade do
  system 'bundle clean'
  system 'bundle update'
end

desc 'Run Jekyll'
task :serve do
  system 'bundle exec jekyll serve --trace --livereload'
end

desc 'Run Jekyll with incremental build and live reloading'
task :serve_i do
  system 'bundle exec jekyll serve --trace --livereload --incremental'
end

task :build do
  system 'JEKYLL_ENV=production bundle exec jekyll build --trace'
end
