using FileShare.BusinessLogic;
using FileShare.DAL;
using FileShare.DAL.EntityContext;
using FileShare.Services.Configuration;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace FileShare
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;

            var config = new AppConfigFactory().LoadConfiguration(Data.ConfigType.AppConfig);

            new ConfigStorage().PopulateConfiguration(config);
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

            services.AddScoped<IFileRepository, FileRepository>();
            services.AddScoped<IFileBl, FileBl>();

            services.AddDbContext<FileInfoContext>(options =>
                options.UseSqlServer(ConfigurationExtensions.GetConnectionString(Configuration, "FileShare")));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseCors(builder =>
             builder.WithOrigins("http://localhost:3000")
             .WithMethods("POST", "GET")
             .WithHeaders("x-chmura-cors", "Content-Type"));

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
