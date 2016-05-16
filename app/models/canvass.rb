# == Schema Information
#
# Table name: consoles
#
#  id          :integer          not null, primary key
#  name        :string
#  description :text
#  user_id     :integer
#  default_set :json
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Canvass < ActiveRecord::Base
  belongs_to :user
  has_many :panels
  has_many :settings, through: :game_shifts
end
